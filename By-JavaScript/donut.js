const pi = Math.PI;
const screen_width = 80;
const screen_height = 24;

const theta_spacing = 0.07;
const phi_spacing = 0.02;

const R1 = 1;
const R2 = 2;
const K2 = 5;
const K1 = screen_width * K2 * 3 / (8 * (R1 + R2));

function renderFrame(A, B) {
    const cosA = Math.cos(A), sinA = Math.sin(A);
    const cosB = Math.cos(B), sinB = Math.sin(B);

    const output = [];
    const zbuffer = [];

    for (let i = 0; i < screen_width; i++) {
        output[i] = new Array(screen_height).fill(' ');
        zbuffer[i] = new Array(screen_height).fill(0);
    }

    for (let theta = 0; theta < 2 * pi; theta += theta_spacing) {
        const costheta = Math.cos(theta), sintheta = Math.sin(theta);

        for (let phi = 0; phi < 2 * pi; phi += phi_spacing) {
            const cosphi = Math.cos(phi), sinphi = Math.sin(phi);

            const circlex = R2 + R1 * costheta;
            const circley = R1 * sintheta;

            const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
            const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * costheta;
            const z = K2 + cosA * circlex * sinphi + circley * sinA;
            const ooz = 1 / z;

            const xp = Math.floor(screen_width / 2 + K1 * ooz * x);
            const yp = Math.floor(screen_height / 2 - K1 * ooz * y);

            const L = cosphi * costheta * sinB - cosA * costheta * sinphi - sinA * sintheta + cosB * (cosA * sintheta - costheta * sinA * sinphi);

            if (L > 0 && ooz > zbuffer[xp][yp]) {
                zbuffer[xp][yp] = ooz;
                const luminance_index = Math.floor(L * 8);
                output[xp][yp] = ".,-~:;=!*#$@"[luminance_index];
            }
        }
    }

    for (let j = 0; j < screen_height; j++) {
        console.log(output.map(row => row[j]).join(''));
    }
}

let A = 0, B = 0;
setInterval(() => {
    renderFrame(A, B);
    A += 0.04;
    B += 0.02;
}, 100);