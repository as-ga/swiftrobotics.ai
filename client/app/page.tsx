import ReportForm from "@/components/ReportForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-2">
          Fashion News Monitoring Agent
        </h1>

        <p className="text-gray-600 mb-10">
          Generate AI-powered summaries of the latest fashion and retail news.
        </p>

        <ReportForm />
      </div>
    </main>
  );
}
