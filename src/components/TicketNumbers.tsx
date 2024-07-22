// src/components/TicketNumbers.tsx
export default function TicketNumbers() {
    const availableNumbers: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
      46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
      91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    ];
    const unavailableNumbers: number[] = []; // Ejemplo de números no disponibles
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {availableNumbers.map((number) => (
          <div
            key={number}
            className={`p-2 rounded text-center flex flex-col items-center justify-center ${
              unavailableNumbers.includes(number)
                ? 'bg-gray-200 text-gray-700'
                : 'bg-green-200 text-green-700'
            }`}
          >
            <div className="text-lg font-bold">{number}</div>
            <div className="text-xs mt-1">{unavailableNumbers.includes(number) ? 'No disponible' : 'Disponible'}</div>
          </div>
        ))}
      </div>
    );
  }
  