const StepBar = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-baseline mb-6 mx-auto w-5/6">
      <div className="realative flex flex-col items-center space-x-2">
        <div
          className={`w-12 h-12 flex items-center bg-gray-100 justify-center text-white rounded-full ${
            currentStep === 1 ? "bg-secondary" : "bg-gray-100"
          }`}
        >
          1
        </div>
        <span className="text-sm font-medium">Informations générales</span>
      </div>
      <div className="h-0.5 flex-1 bg-gray-100"></div>
      <div className="realative flex flex-col items-center space-x-2">
        <div
          className={`w-12 h-12 flex items-center bg-gray-100 justify-center text-white rounded-full ${
            currentStep === 2 ? "bg-secondary" : "bg-gray-100"
          }`}
        >
          2
        </div>
        <span className="text-sm font-medium">Détails du projet</span>
      </div>
      <div className="h-0.5 flex-1 bg-gray-100"></div>
      <div className="realative flex flex-col items-center space-x-2">
        <div
          className={`w-12 h-12 flex items-center bg-gray-100 justify-center text-white rounded-full ${
            currentStep === 3 ? "bg-secondary" : "bg-gray-100"
          }`}
        >
          3
        </div>
        <span className="text-sm font-medium">
          Planification et Préférences
        </span>
      </div>
    </div>
  );
};
export default StepBar;
