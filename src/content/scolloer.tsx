export default function Scolloer({ children }: any) {
    return (
        <div style={{
            height: '400px',
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