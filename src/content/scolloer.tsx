import React, { useEffect, useState } from 'react';

export default function Scolloer({ children }: any) {
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
    return (
        <div style={{
            height: windowSize.width > 400 ? '500px': '270px',
        }}>
            <div style={{
                height: '100%',
                overflowY: 'auto',
            }}>
                {children}
            </div>
        </div>
    )
}