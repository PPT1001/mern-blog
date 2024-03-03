export default function Post() {
    return (
        <div className='post'>
        <div className='image'>
          <img src ='https://miro.medium.com/v2/resize:fit:720/format:webp/1*UGICleQp4h7D-TQYpe0z5A.png' alt='blog' />
        </div>
        <div className='texts'>
          <h2>Still Smart to Learn DevOps in 2024?</h2>
          <p className='info'>
            <span className="Author">Pragash Sasitharan</span>
            <span className='time'>06/01/2024 06:59</span>
          </p>
          <p className='summary'>I know that many of us have this question in mind and it is important for everyone in the tech industry, 
            no matter if you are a beginner or an expert. We cannot waste time on something that might be useless by the next year!</p>
        </div>
      </div>
    );
}