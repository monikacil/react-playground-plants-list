import Button from "./Button"


export default function WidgetTitle ({title, buttonText="", onButtonClick}) {
    return (
    <div className="w-full h-16 flex items-center justify-between border-b mb-8 text-xl font-bold">
      {title}
      {buttonText ? (
        <div className="py-4">
          <Button text={buttonText} onClick={onButtonClick}/>
        </div>
      ) : (
        null
      )}
     
    </div>
    );
  }