const useCopy = async (text: string): Promise<boolean | Error> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    return e;
  }
};

export default useCopy;
