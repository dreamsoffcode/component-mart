export default function Landing() {
    return (
        <div style={{height: "100%"}}>
            <div>
                <h1>Hi there!</h1>
                <h3>Select an option from the navigation bar go to to that specific component</h3>
            </div>

            <footer style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    flexGrow: 1,
                    flexShrink: 0,
                }}>
                    Footer
                </div>
            </footer>



        </div>

    )
}