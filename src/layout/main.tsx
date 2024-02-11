import { useEffect, useState } from "react";
import menustyle from "./menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
	const [menuopen, setMenuopen] = useState(false);
	const router = useRouter();
	const [windowSize, setWindowSize] = useState({
		height: 0,
	});
	console.log(menuopen);
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
	}, [])
	// #F8E4ABaa
	return (
		<div style={{
			height: windowSize.height,
			backgroundColor: menuopen ? "#F8E4ABaa" : "#F8E4AB",
			transition: "background-color 0.5s",
			fontSize: '25px',
		}}>
			<div>
				<button
					style={{
						position: "fixed",
						margin: "10px 10px",
						height: "40px",
						width: "130px",
						fontSize: "20px",
						borderRadius: "5px",
						border: "none",
						background: "#00000032",
						cursor: "pointer",
						padding: "5px",
					}}
					onClick={() => {
						menuopen ? setMenuopen(false) : setMenuopen(true);
					}}>
					{"< "}Menu
				</button>

				<div className={menuopen ? menustyle.opened : menustyle.closed}>
					CID 謎解き
					<div style={{
						fontSize: "24px",
						padding: "3vh 10px",
					}}>
						<div>
							<button
								style={{
									margin: "10px 10px",
									height: "40px",
									width: "130px",
									fontSize: "20px",
									borderRadius: "5px",
									border: "none",
									background: "#00000000",
									color: "#fff",
									cursor: "pointer",
									padding: "5px",
								}}
								onClick={() => {
									router.push("/?load=true")
									setMenuopen(false);
								}}>
								最初に戻る
							</button>
						</div>
						<div>
							<button onClick={() => {
								router.back();
							}}
								style={{
									margin: "10px 10px",
									height: "40px",
									width: "130px",
									fontSize: "20px",
									borderRadius: "5px",
									border: "none",
									background: "#00000000",
									color: "#fff",
									cursor: "pointer",
									padding: "5px",

								}}>
								ひとつ前に戻る
							</button>
						</div>
					</div>
					<button
						style={{
							margin: "10px 10px",
							height: "40px",
							width: "130px",
							fontSize: "20px",
							borderRadius: "5px",
							border: "none",
							background: "#000000d0",
							color: "#fff",
							cursor: "pointer",
							padding: "5px",
						}}
						onClick={() => {
							setMenuopen(false);
						}}>
						閉じる
					</button>
				</div>
			</div>
			<div
				style={{
					padding: "50px 10px",
				}}>
				{children}
			</div>
		</div>
	)
}
