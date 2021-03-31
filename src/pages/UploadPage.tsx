import React, {
    useEffect, 
    useState,
    useRef,
 } from 'react';
import ReactDOM from 'react-dom';
import { 
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Ref,
    Segment
} from 'semantic-ui-react'
import FileInput from '../components/FileInput';

function UploadPage(this: any): JSX.Element {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    
    const changeHandler = (event: { target: { files: React.SetStateAction<undefined>[]; }; }) => {
        console.log(event.target.files);
        // setSelectedFile();
        setIsFilePicked(true);
    };

    // const objectRef = useRef(null);
    // const [functionalRef, setFunctionalRef] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
  
    const onClickInput = () => this.input.click();

    React.useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false);
    }, []);
  
    return (
        <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header 
                    as='h2'
                    style={{ color: '#00338' }} 
                    textAlign='center'
                >
                    <Image style={{ paddingBottom: '10px' }} src='https://uploads-ssl.webflow.com/5d40663deee5235454fb5539/5ea0e0541bf6a5cb923b0149_logo-blue.svg' /> Upload your file(s)
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <FileInput onFileChange={changeHandler(EventTarget)}/>
                        <Button
                            style={{ 
                                backgroundColor: '#317BE0',
                                color: 'white'
                            }} 
                            fluid 
                            size='large'
                        >
                            Submit
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Questions or comments? <a href='https://www.trustsitka.com/get-in-touch' target='new'>Contact Us!</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default UploadPage;