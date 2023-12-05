const toBase64 = (file: File): Promise<string> => {
  if (file instanceof FileList) file = file[0];
  return new Promise((resolve, reject): void => {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });
};

export { toBase64 };
