import React from 'react';


import "./Experience.css";

const Publication = ({title, link, authors, me_index, date, medium, description}) => {
  // first line title, with link
  // second line authors, with me_index bolded
  // third line date, medium
  return (
    <div>
      <h3><a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a></h3>
      {authors && (<p>
        {authors.map((author, index) => (
          <span key={index}>
            {index === me_index ? <strong>{author}</strong> : author}
            {index === authors.length - 1 ? '' : ', '}
          </span>
        ))}
      </p>)}
      <p>{medium}. {date}</p>
      {description && (
        <p>{description}</p>
      )}
    </div>
  );
};

const Research = () => {
  return (
    <div className='academics-container'>
      <h1>Research</h1>
      <section>
        <h2>Publications</h2>
        <div style={{marginBottom: '4em'}}>
          <Publication
            title="[Preprint] Genomics 2 Proteins portal: A resource and discovery tool for linking genetic screening outputs to protein sequences and structures"
            link="https://www.biorxiv.org/content/10.1101/2024.01.02.573913v1"
            authors={["Kwon, S.*", "Safer, J.*", "Nguyen, D.T.", "Hoksza, D.", "May, P.", "Arbesfeld, J.", "Rubin, A.F.", "et al."]}
            me_index={1}
            date="2024"
            medium="bioRxiv"
            description={"Methods paper introducing g2p.broadinstitute.org, a portal for mapping varaints, base-editing screen outputs, etc to protein sequence and structure"}
          />
          <Publication
            title="[Preprint] Mapping MAVE data for use in human genomics applications"
            link="https://www.biorxiv.org/content/10.1101/2023.06.20.545702v1"
            authors={["Arbesfeld, J.A.", "Da, E.Y.", "Kuzma, K.", "Paul, A.", "Farris, T.", "Riehle, K.", "Agostinho, N.D.S.", "Safer, J.", "et al."]}
            me_index={7}
            date="2023"
            medium="bioRxiv"
            description={"Methods paper on MAVEdb, a resource for multiplexed assays of variant effect data. As part of this effort, Genomics 2 Proteins portal added support for MAVE data."}
          />
        </div>

        <h2>Posters & Presentations</h2>
        <Publication
          title="[Talk] Genomics to Proteins Portal: A Discovery Portal to Link Genetic Screening Outputs to Protein Sequence and Structure"
          date="May 23, 2024"
          medium="Mutational Scanning Symposium, Cambridge, MA"
        />
        {/* <Publication
          title="Predicting Functional Effects of Genetic Variants in Ion Channels"
          authors={["Rissom, PF.", "Safer J.", "Sarmiento PY."]}
          me_index={1}
          date="March 21-22, 2024"
          medium="Spring 2024 HPI–MIT Workshop, Cambridge, MA"
        /> */}
        <Publication
          title="[Poster] Characterizing 127 understudied kinases through in silico saturation mutagenesis of predicted protein structures"
          authors={["Safer, J.", "Kwon, S.", "Arnaudi, M.", "Tiberti, M.", "Papaleo, E.", "Iqbal, S."]}
          me_index={0}
          date="February 10-14, 2024"
          medium="Biophysical Society Annual Meeting, Philadelphia, PA"
        />
        <Publication 
          title="[Poster] Genomics To Proteins portal: A discovery tool to link genetic screening outputs to protein sequence and structure"
          authors={["Iqbal, S.", "Safer, J.", "Nguyen, D.", "Kwon, S.", "May, P.", "Hoksza, D.", "Campbell, A.", "Burgin, A."]}
          me_index={1}
          date="November 1-5, 2023"
          medium="American Society of Human Genetics Annual Meeting, Washington, DC"
        />
  
      </section>
    </div>
  );
};
export default Research;
