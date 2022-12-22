const b = document.getElementById("upload"),
    d = document.getElementById("download"),
    c = document.getElementById("result"),
    s = document.getElementById("ratio");
let p = s.value,
    o = "";
b.addEventListener("click", () => {
    const r = document.createElement("input");
    r.type = "file", r.accept = "image/*", r.click(), r.addEventListener("change", () => {
        const i = new FileReader;
        i.readAsDataURL(r.files[0]), i.onload = () => {
            o = i.result, c.src = o, d.style.display = "inline-block", c.style.display = "inline-block", s.style.display = "inline-block", d.addEventListener("click", () => {
                const r = document.createElement("a");
                r.href = o, r.download = "shakal.jpg", r.click()
            })
        }
    })
});
c.addEventListener("load", () => {
    p = s.value
});
s.addEventListener("input", () => {
    if (s.value !== p) {
        p = s.value;
        const r = new Image;
        r.src = o, r.onload = () => {
            const i = document.createElement("canvas");
            i.width = r.naturalWidth, i.height = r.naturalHeight;
            const t = i.getContext("2d");
            t.drawImage(r, 0, 0);
            const n = s.value / 100,
                e = i.toDataURL("image/jpeg", n);
            c.src = e
        }
    } else c.src = o
});