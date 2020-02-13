export default function (seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, seconds * 1000);
  })
}