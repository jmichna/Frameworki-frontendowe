export default function AppReducer(state, action) {
    switch (action.type) {
      case "add":
        // Dodanie nowego obiektu do stanu
        return [...state, action.payload];
      case "edit":
        // Aktualizacja istniejącego obiektu na podstawie ID
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.updatedData }
            : item
        );
      case "delete":
        // Usunięcie obiektu na podstawie ID
        return state.filter(item => item.id !== action.payload.id);
        case "rate":
            return state.map(item =>
                item.id === action.payload.id
                ? { ...item, rating: action.payload.rating }
                : item
            );
      default:
        return state;
    }
  }  