import WidgetTitle from "../dummy/WidgetTitle";

export default function Widget ({children, title, buttonText, handleButtonClick}) {
    return (
    <div className="m-auto px-10 pb-16 bg-white shadow-md w-full">
        <WidgetTitle title={title} buttonText={buttonText} onButtonClick={handleButtonClick}/>
        {children}
    </div>
    );
  }