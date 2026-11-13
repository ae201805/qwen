import { InfiniteTable } from './components/InfiniteTable';
import { useInfiniteData } from './hooks/useInfiniteData';

function App() {
  const { data, loading, hasMore, loadMore } = useInfiniteData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 6h18M3 18h18" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Infinite Table</h1>
                <p className="text-xs text-gray-500">Scroll down to load more data</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-lg">
                <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-semibold text-indigo-700">{data.length}</span>
                <span className="text-xs text-indigo-500">records</span>
              </div>
              {loading && (
                <div className="flex items-center gap-2 text-indigo-600">
                  <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm font-medium hidden sm:inline">Loading...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-indigo-900">How it works</h3>
              <p className="text-sm text-indigo-700 mt-0.5">
                This table uses <span className="font-medium">Intersection Observer</span> to detect when you scroll near the bottom, 
                then automatically loads the next batch of records. Total capacity: <span className="font-medium">1,000 rows</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <InfiniteTable
          data={data}
          loading={loading}
          hasMore={hasMore}
          loadMore={loadMore}
        />

        {/* Footer Stats */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            Showing <span className="font-semibold text-gray-700">{data.length}</span> of{' '}
            <span className="font-semibold text-gray-700">1,000</span> total records
          </p>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(data.length / 1000) * 100}%` }}
              ></div>
            </div>
            <span className="font-medium text-gray-700">{Math.round((data.length / 1000) * 100)}%</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
