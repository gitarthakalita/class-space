import React from 'react';
// import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis , VictoryTheme,
        VictoryStack, VictoryLegend } from 'victory';




const data2012 = [
  { test: 1, marks: 13000 },
  { test: 2, marks: 16500 },
  { test: 3, marks: 14250 },
  { test: 4, marks: 19000 }
];

const data2013 = [
  {test: 1, marks: 15000},
  {test: 2, marks: 12500},
  {test: 3, marks: 19500},
  {test: 4, marks: 13000}
];

const data2014 = [
  {test: 1, marks: 11500},
  {test: 2, marks: 13250},
  {test: 3, marks: 20000},
  {test: 4, marks: 15500}
];

const data2015 = [
  {test: 1, marks: 18000},
  {test: 2, marks: 13250},
  {test: 3, marks: 15000},
  {test: 4, marks: 12000}
];



class TestReport extends React.Component {


  render() {
    return (
      <div className="test-report-container">
        <VictoryChart
          domainPadding={25}
          height={320}
          width={500}
          theme={VictoryTheme.material}
          >

<VictoryLegend
                x={125} y={15}
                // title="Legend"
                orientation="horizontal"
                gutter={10}
                colorScale={"cool"}
                data={[{name:"2012"},{name:"2013"},{name:"2014"},{name:"2015"}]}
            />


            <VictoryAxis
              tickValues={[1,2,3,4]}
              tickFormat={["test 1", "test 2", "test 3", "test 4"]}
            />
          <VictoryAxis 
            dependentAxis
            
            tickFormat={(x) => (`${x/1000}%`)}
          />
          <VictoryStack
            colorScale={"cool"}
          >
          <VictoryBar
              data={data2012}
              x="test"
              y="marks"
            />
              <VictoryBar
              data={data2013}
              x="test"
              y="marks"
            />
              <VictoryBar
              data={data2014}
              x="test"
              y="marks"
            />
              <VictoryBar
              data={data2015}
              x="test"
              y="marks"
            />
          </VictoryStack>
          


        </VictoryChart>
      </div>
    );
  }
}

export default TestReport;
