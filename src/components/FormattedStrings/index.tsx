const FormattedDate = (params: {date: string}) => {

	const date = new Date(params.date)
	const timestamp = date.valueOf()
	const formattedDate = new Intl.DateTimeFormat("ru-RU", {
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}).format(timestamp)

	return (
		<div>
			{formattedDate}
		</div>
	);
};

export default FormattedDate;
