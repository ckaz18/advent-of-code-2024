
export function splitDataArray(data: string[]): number[][] {
  const newDataList1: number[] = [];
  const newDataList2: number[] = [];
  
  data.forEach((item) => {
    const splitItem = item.split(/\s+/g);
    newDataList1.push(parseInt(splitItem[0]));
    newDataList2.push(parseInt(splitItem[1]));
  });

  return [newDataList1, newDataList2];
}