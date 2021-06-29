import Layout from "../components/layout"

export default function Qr() {
    function copyToClipboard() {
        /* Get the text field */
        var copyText = document.getElementById("passwordText");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        // alert("Copied password " + copyText.value);
      } 

    return (
        <Layout pageName="QR">
            <h1>YeakSa_5G</h1>
            <p>
                Wifi password:
            </p>
                <input type="text" value="yeak@freewifi" id="passwordText" 
                    style={{
                        fontSize: `1.8rem`,
                        margin: `.8rem 0`,
                        padding: `.25rem .8rem`
                    }}></input>
                <button 
                    onClick={() => copyToClipboard()}
                    style={{padding: `.5rem .8rem`, fontSize: `1.1rem`}}

                >Copy to clipboard</button>
            
        </Layout>
    )
}