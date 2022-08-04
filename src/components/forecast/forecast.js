import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from "react-accessible-accordion";
//import AccordionItemButtonWrapper from "react-accessible-accordion/dist/types/components/AccordionItemButton";
//import {} from "react-accessible-accordion/dist/types/components/AccordionItemHeading";

const Forecast = ({ data }) => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img className="icon-small" alt="weather" src={`icon/${item.weather[0].icon}.png`}></img>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
