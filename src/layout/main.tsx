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
			color: "#000000",
			height: windowSize.height,
			display: "flex",
			justifyContent: "center",
			fontSize: '2.5vh',
		}}>
			<div
				style={{
					width: 600,
					backgroundColor: "#F8E4AB",
					padding: "50px 10px",
				}}>
				{children}
			</div>
		</div>
	)
}
