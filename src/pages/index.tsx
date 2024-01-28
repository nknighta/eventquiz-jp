import Layout from "../layout/main";
import Image from "next/image"
import { useRouter } from "next/router";

export default function Index() {
	const router = useRouter();
	return (
		<Layout>
			<div style={{
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: "rgba(0,0,0,0.5)",
				zIndex: 1,

			}}>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50%",
					width: "100%",
					fontSize: "3rem",
					fontWeight: "bold",
				}}>
					CID 謎解き
				</div>
				<div style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50%",
					width: "100%",
				}}>
					<button style={{
						width: "30vh",
						height: "50px",
						fontSize: "2rem",
						fontWeight: "bold",
						backgroundColor: "#00aaff",
						border: "none",
						outline: "none",
						color: "white",
						cursor: "pointer",
						borderRadius: "50px",
					}}
						onClick={() => {
							router.push("/quiz")
						}}
					>
						さあ、はじめよう！
					</button>
				</div>
			</div>
			<Image
				src={"/image.jpeg"}
				layout={`fill`}
				objectFit={`cover`}
				alt="bgImage"
				style={{
					position: "absolute",
					opacity: 0.75
				}}
			/>
		</Layout>
	)
}
