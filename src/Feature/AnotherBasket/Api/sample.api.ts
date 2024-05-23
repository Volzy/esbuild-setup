export type ISampleContent = {
  slideshow: object;
};

export const fetchSampleContent = async () => {
    const res = await fetch('https://httpbin.org/json');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    const content: ISampleContent = {
      slideshow: data?.slideshow || {},
    };
    return content;
};