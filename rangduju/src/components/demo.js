import React from 'react';

class Demo extends React.Component {
    render() {
        return (
            <div className='demo'>
                <div className="title">与我们合作的部分房源展示如下：</div>
                <div className='distancephone'><iframe className="airtable-embed" src="https://airtable.com/embed/shrMkB51k80A93roC?backgroundColor=green" frameborder="0" onmousewheel="" width="100%" height="683" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe></div>
            </div>
        );
    }
}

export default Demo;