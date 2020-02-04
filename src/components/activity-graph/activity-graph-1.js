import React from 'react';
// import * as V from 'victory';
import { VictoryChart, VictoryAxis , Victorytheme,
        VictoryStack, 
        VictoryLine,
        VictoryLegend} from 'victory';




const data2012 = [
  { date: 1, marks: 85 },
  { date: 2, marks: 67 },
  { date: 3, marks: 81 },
  { date: 4, marks: 59 }
];




class ActivityGraph1 extends React.Component {


  render() {
    return (
      <div className="test-report-container">
        <VictoryChart
          domainPadding={25}

          viewBox={"0 0 500 600"}

          width={500}
          height={300}
         
          
          theme={Victorytheme.material}
          >
            <VictoryLegend
                x={125} y={15}
                // title="Legend"
                orientation="horizontal"
                gutter={10}
                colorScale={"cool"}
                data={[{name:"2012"},{name:"2013"},{name:"2014"},{name:"2015"}]}
            />

      
          <VictoryStack
            colorScale={"cool"}
          >
          <VictoryLine

          domain={{x:[50,100],y:[0,6]}}

              data={data2012}
              y="test"
              x="marks"
            />
            
          </VictoryStack>
          


        </VictoryChart>
      </div>
    );
  }
}

export default ActivityGraph1;
