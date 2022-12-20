import StandartLayout from "../layouts/StandartLayout";
import Map from "../components/Map";
import Resources from "../components/Resources";
import ResourcesItem from "../components/Resources/ResourcesItem";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Mainpage = () => {
	const [state, setState] = useState([])

	useEffect(() => {
		fetch(`http://api.cit.rtyva.ru/api/posts?pagination[limit]=5&populate=*`)
			.then((res) => res.json())
			.then((res) => res.data)
			.then((res) => setState(res))
	}, []);


	return (
		<StandartLayout>

			<Map/>
			<div className="last-news__container">
				{state?.map((item: any) => {

					const date = new Date(item.publishedAt)
					const timestamp = date.valueOf()

					return (
						<div key={item} className="last-news__card">


							<img src="/sport.jpeg"/>

							<div className="last-news__card-content__container">
								<div className="last-news__card-content">
									<Link className="last-news__card-title" to={`/news/${item.id}`}>
										{item.title}
									</Link>
									<div className="last-news__card-date">
										{new Intl.DateTimeFormat("ru-RU", {
											month: 'long',
											day: 'numeric',
											hour: 'numeric',
											minute: 'numeric'
										}).format(timestamp)}
									</div>
								</div>
							</div>

						</div>)
				})}
			</div>

			<Resources>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17].map((item, index) => {
					return (
						<ResourcesItem key={index}/>
					)
				})}
			</Resources>
		</StandartLayout>
	);
};

export default Mainpage;
