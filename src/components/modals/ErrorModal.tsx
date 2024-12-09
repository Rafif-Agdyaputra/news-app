export interface ModalInterface {
  message: string;
  onClose: () => void;
}

const ErrorModal = ({ message, onClose }: ModalInterface) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold text-red-600">Error</h2>
        <p className="text-gray-800 mt-2">{message}</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;