export default function handleFormatDate(date: string): string {
  return `${date.split('T')[0].split('-')[2]}/
	${date.split('T')[0].split('-')[1]}/
	${date.split('T')[0].split('-')[0]}`;
}
