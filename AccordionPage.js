import Accordion from "../components/Accordion";

function AccordionPage() {

  const items=[

    {
        id:'1',
        label:' Html?',
        content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.'
    }
,
    {
        id:'2',
        label:' Css?',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    }
,
    {
        id:'3',
        label:'Javascript?',
        content: 'JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.'
    }
  ]

  return <Accordion items ={items} /> //passing array as a prop

}

export default AccordionPage;
