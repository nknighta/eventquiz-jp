import { useEffect, useState } from "react";
import menustyle from "./menu.module.css";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
	const [menuopen, setMenuopen] = useState(false);
	const [copystatus, setCopystatus] = useState(false);
	const router = useRouter();
	const [windowSize, setWindowSize] = useState({
		height: 0,
		width: 0
	});
	const isBrowser = typeof window !== "undefined";
	useEffect(() => {
		if (isBrowser) {
			const handleResize = () => {
				setWindowSize({
					height: window.innerHeight,
					width: window.innerWidth
				});
			};

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		} else {
			return;
		}
	}, [])

	const urlcliper = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
			setCopystatus(true);
			console.log("succes copy")
		} catch {
			console.error("copy faild");
		}
	}
	// #F8E4ABaa
	return (
		<div style={{
			height: windowSize.height,
			backgroundColor: menuopen ? "#ab9d76" : "#F8E4AB",
			transition: "background-color 0.5s",
			fontSize: windowSize.width > 400 ? '23px' : '17px'
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

				<div style={menuopen ? {
					backgroundColor: "#00000058",
					color: "#fff",
					position: "fixed",
					width: "350px",
					left: "0",
					borderRight: "1px solid #fff",
					height: "100%",
					transition: "left 0.4s",
				} : {
					backgroundColor: "#00000058",
					color: "#fff",
					position: "fixed",
					width: "350px",
					left: "-450px",
					borderRight: "1px solid #fff",
					height: "100%",
					transition: "left 0.18s",
				}}>
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
									width: "200px",
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

						<div>
							<button onClick={() => {
								urlcliper(location.href)
							}}
								style={{
									margin: "10px 10px",
									width: "200px",
									height: "40px",
									fontSize: "20px",
									borderRadius: "5px",
									border: "none",
									background: "#00000000",
									color: "#fff",
									cursor: "pointer",
									padding: "5px",
								}}>
								{copystatus ? (
									"コピー完了"
								) : (
									"現在のURLをコピー"
								)}
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
							setCopystatus(false);
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
