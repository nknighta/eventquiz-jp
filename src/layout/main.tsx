import { useEffect, useState } from "react";

export default function Layout({ children }: any) {
	const [height, setHeight] = useState<number>(0);
	const [windowSize, setWindowSize] = useState({
		height: 0,
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setWindowSize({
					height: window.innerHeight,
				});
			};

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		} else {
			return;
		}
	}, []);
	return (
		<div style={{
			backgroundColor: "#000",
			color: "#fff",
			height: windowSize.height,
			display: "flex",
			justifyContent:"center"
		}}>
			<div
				style={{
					width: 600
				}}>
				{children}
			</div>
		</div>
	)
}
