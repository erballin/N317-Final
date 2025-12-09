import Card from '@/components/Card';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">About the Project</h1>
      
      <div className="space-y-6">
        <Card title="Project Goal">
          <p className="text-slate-600 leading-relaxed">
            Modern developers often spend significant time writing or updating documentation for codebases. 
             <strong> DocuGen AI</strong> streamlines this process by creating a web application that automatically 
            generates readable, structured documentation based on uploaded or pasted code.
          </p>
        </Card>

        <Card title="Developers">
          <ul className="space-y-3">
            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-900">Onesti</span>
              <span className="text-sm text-slate-500">UI/Frontend Lead</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-900">Apollo</span>
              <span className="text-sm text-slate-500">Routing & State Management</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-900">Pierce</span>
              <span className="text-sm text-slate-500">AI Integration</span>
            </li>
            <li className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-900">Haven</span>
              <span className="text-sm text-slate-500">Error Handling</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}