export const typingAnimation = (ref, text, ms) => {
  [...text].forEach((letter, i) => {
    setTimeout(() => (ref.current.innerHTML += letter), i * ms);
  });
};
