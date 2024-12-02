
export function splitDataLists(data: string[]): number[][] {
  const splitList: number[][] = [];
  data.forEach((input) => {
    const splitItem = input.split(/\s+/g);
    const mapped = splitItem.map((item) => parseInt(item));

    splitList.push(mapped);
  });

  return splitList;
}