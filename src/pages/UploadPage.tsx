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
    const [isFilePicked, setIsFilePicked] = useState(false);
    
    const onFormSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file).then((response: { data: any; }) => {
            console.log(response.data);
        });
    };
    
    const changeHandler = (fileArray: File[] | null) => {
        return true;
    }

    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
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
                        <FileInput onFileChange={(files) => changeHandler(files)} />
                        <Button
                            style={{ 
                                backgroundColor: '#317BE0',
                                marginTop: '20px',
                                color: 'white'
                            }} 
                            fluid 
                            size='large'
                            onClick={onFormSubmit}
                        >
                            Queue Files
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