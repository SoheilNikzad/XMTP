export async function createAttachment(file: File): Promise<any> {
  const data = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result);
      } else {
        reject(new Error("Not an ArrayBuffer"));
      }
    };
    reader.readAsArrayBuffer(file);
  });

  return {
    filename: file.name,
    mimeType: file.type,
    data: new Uint8Array(data),
  };
}