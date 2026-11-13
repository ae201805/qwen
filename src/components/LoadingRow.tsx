export function LoadingRow() {
  return (
    <tr className="border-b border-gray-100">
      <td colSpan={8} className="px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span className="text-sm text-gray-500 font-medium">Loading more records...</span>
        </div>
      </td>
    </tr>
  );
}
