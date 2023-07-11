const fibonacci = (iterations) => {
    let out = [1];

    for (let i = 1; i < iterations; i++) {
        if (iterations === 1) {
            return out;
        }

        if (out.length === 1) {
            out.push(1);
        }else{
            out.push(out[(out.length - 1)] + out[out.length - 2]);
        }
    }

    return out;
}

let mil = fibonacci(100);
console.log(mil);

// HTML
let fib = document.getElementById('fib');

let render = `
<table>
    <tr>
        <th>Iteration</th>
        <th>Value</th>
    </tr>`;
render += mil.map((item, index) => `
<tr>
    <td>${index + 1}</td>
    <td>${item}</td>
</tr>`).join('');
render += `</table>`;

fib.innerHTML = render;