export default function Landing() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: "92.7vh"}}>
            <div style={{
                justifySelf: 'flex-start',
                flexGrow: 1,
            }}>
                <h1>Hi there!</h1>
                <h3>Select an option from the navigation bar go to to that specific component</h3>
            </div>

            <div style={{
                justifySelf: 'flex-end',
                alignSelf: 'center'
            }}>
                Developed by Akash Anand
            </div>



        </div>

    )
}