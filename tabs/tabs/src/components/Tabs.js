import React, { useState } from "react";

const Tabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(1);

    return <div style={{marginTop: 40}}> 
    <header>
    {props.tabItems.map((tab, i) => {
        const headerStyles = {
            padding: 20, 
            marginRight: 10,  
            border:"2px solid black",
            
        };

        if ( selectedTab === i) {
            headerStyles.backgroundColor = "black";
            headerStyles.color = "white";
        }

                return (
                <span key={i} onClick={(event) => {
                    setSelectedTab(i);
                    props.tabItems[i].callback();
                }}
                style={{headerStyles}}>{tab.header}</span>);
            })
            
        };
    </header>
    <main>
        <h3>{props.tabItems[selectedTab].content}</h3>
    </main>
        </div>
};

export default Tabs;