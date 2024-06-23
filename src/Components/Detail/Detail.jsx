import React from "react";
import "./Detail.css"

const Detail = ({data}) => {
	return (
		<div className="container container-fluid poppin px-3 px-sm-0">
			<div className="row">
				{data.map(
					(
						item
					) => (
						<div className="col-sm-3 col-12 text-center text-sm-start p-2 rounded">
							<div
								className="h-100 rounded"
								style={{
									background: "#E4E4E4",
									padding: "1.8rem",
									paddingBottom: "0.7rem",
								}}
							>
								<img
									src={
										window
											.location
											.origin +
										item.icon
									}
									alt={
										item.title
									}
									style={{
										height: "2.4rem",
										marginLeft: 2,
									}}
								/>
								<div className="mt-3">
									<p
										style={{
											fontSize: "1.6rem",
											marginBottom: "2rem",
											fontWeight: "500",
										}}
									>
										{
											item.title
										}
									</p>
									<p
										className="detail-grid-text mt-auto"
										style={{
											fontSize: "1.1rem",
											fontWeight: "400",
											marginTop: "1rem",
										}}
									>
										{
											item.description
										}
									</p>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Detail;
