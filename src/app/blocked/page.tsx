export default function Blocked() {
  return (
    <main className="flex felx-col justify-around items-center max-w-2xl mx-auto h-[60vh]">
      <div className="border-2 border-dashed p-8">
        <h3 className="text-2xl font-semibold mb-1 text-red-500">
          Access blocked
        </h3>
        <p className="text-4xl mb-6">Too many request, slow down.</p>
        <p>You likely hit the usage limit.Try again after some time.</p>
      </div>
    </main>
  );
}
