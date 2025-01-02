import React, { useRef } from 'react';
import ResumePage from '../components/Resumepage';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    html2canvas(resumeRef.current, {
      useCORS: true,  // Ensure CORS works for external images if applicable
      scale: 2,       // Adjust the scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 10, 10); // Position and scaling of the image
      doc.save('resume.pdf');
    });
  };

 
  
  return (
    
    <div style={{ position: 'relative' }}>
      <div ref={resumeRef}>
        <ResumePage />
      </div>
      <button
        onClick={handleDownload}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Resume;




{/* <ReactToPrint
        trigger={() => <button>Download as PDF</button>}
        content={() => resumeRef.current}
        documentTitle="Resume"
        onAfterPrint={() => alert('Document has been downloaded!')}
      />
      <div style={{ display: 'none' }}>
        <ResumePage ref={resumeRef} />
      </div> */}