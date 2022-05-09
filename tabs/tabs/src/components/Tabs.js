import React, { useState } from "react";

const Tabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(1);

    return <div style={{marginTop: 40}}> 
    <header>
    {props.tabItems.map((tab, i) => {

                return (
                <span className= {selectedTab=== i &&'active'} key={i} onClick={(event) => {
                    setSelectedTab(i);
                    props.tabItems[i].callback();
                }}
                style={{ padding: 20, 
                    marginRight: 10,  
                    border:"2px solid black",
                    }}>{tab.header}</span>);
            })
            
        }
    </header>
    <main>
        <h3>{props.tabItems[selectedTab].content}</h3>
    </main>
        </div>
};

export default Tabs;