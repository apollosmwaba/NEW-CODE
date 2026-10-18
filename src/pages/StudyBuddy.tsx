import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, BookOpen, FileText, Lightbulb, RotateCcw, BookmarkPlus, Copy } from 'lucide-react';
import { ChatMessage } from '../data/mockData';

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello! I'm your AI Study Buddy 🎓\n\nI can help you with:\n• Explaining concepts from past papers\n• Solving problems step-by-step\n• Providing hints before full solutions\n• Creating practice questions\n• Analyzing topic patterns\n\nWhat subject or paper would you like help with today?",
    timestamp: new Date(),
  }
];

const suggestedQuestions = [
  "Explain question 3 from GCE Math Paper 1 2023",
  "How do I solve quadratic equations?",
  "What topics appear most in Physics GCE?",
  "Help me understand recursion in CS 210",
  "Explain Kirchhoff's Laws with examples",
];

export default function StudyBuddy() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateResponse(messageText);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1500);
  };

  const generateResponse = (question: string): ChatMessage => {
    const lower = question.toLowerCase();
    let content = '';
    const sources: { title: string; page?: number }[] = [];

    if (lower.includes('quadratic') || lower.includes('equation')) {
      content = `## Solving Quadratic Equations\n\nA quadratic equation has the form **ax² + bx + c = 0**.\n\n### Method 1: Factorization\nIf the equation can be factored:\n1. Find two numbers that multiply to give **ac** and add to give **b**\n2. Rewrite the middle term using these numbers\n3. Factor by grouping\n4. Set each factor equal to zero\n\n### Method 2: Quadratic Formula\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n### Example\nSolve: x² - 5x + 6 = 0\n\n**Step 1:** a=1, b=-5, c=6\n**Step 2:** Using the formula:\nx = (5 ± √(25-24)) / 2\nx = (5 ± 1) / 2\n**x = 3 or x = 2** ✓\n\n💡 **Tip:** This type of question appears in almost every GCE Mathematics paper. Practice factorization first as it's faster!`;
      sources.push({ title: 'Mathematics Paper 1 - GCE 2023', page: 2 }, { title: 'Mathematics Marking Scheme - GCE 2023', page: 5 });
    } else if (lower.includes('recursion') || lower.includes('cs 210')) {
      content = `## Understanding Recursion\n\nRecursion is when a function calls itself to solve a smaller instance of the same problem.\n\n### Key Components:\n1. **Base Case** — The condition that stops recursion\n2. **Recursive Case** — The function calling itself with a smaller input\n\n### Example: Factorial\n\`\`\`python\ndef factorial(n):\n    if n <= 1:      # Base case\n        return 1\n    return n * factorial(n-1)  # Recursive case\n\`\`\`\n\n### How it works for factorial(4):\n\`\`\`\nfactorial(4) = 4 × factorial(3)\nfactorial(3) = 3 × factorial(2)\nfactorial(2) = 2 × factorial(1)\nfactorial(1) = 1  ← Base case reached!\nResult: 4 × 3 × 2 × 1 = 24\n\`\`\`\n\n### Common Recursion Problems in CS 210:\n- Fibonacci sequences\n- Tree traversals (pre-order, in-order, post-order)\n- Binary search\n- Divide and conquer algorithms\n\n💡 **Exam Tip:** Always identify the base case first, then show how the problem reduces.`;
      sources.push({ title: 'CS 210 - Data Structures Final 2022', page: 3 });
    } else if (lower.includes('kirchhoff') || lower.includes('circuit')) {
      content = `## Kirchhoff's Laws\n\n### Kirchhoff's Current Law (KCL)\nThe total current entering a junction equals the total current leaving it.\n**ΣI(in) = ΣI(out)**\n\n### Kirchhoff's Voltage Law (KVL)\nThe sum of all voltages around a closed loop equals zero.\n**ΣV = 0**\n\n### Applying KVL - Example:\nFor a loop with a 12V battery, and two resistors (R₁=4Ω, R₂=2Ω):\n\n1. Going around the loop: 12 - 4I - 2I = 0\n2. 12 = 6I\n3. **I = 2A**\n\n### Key Points for EE 201:\n- KCL is based on conservation of charge\n- KVL is based on conservation of energy\n- Sign convention matters (be consistent!)\n- These laws work for both DC and AC circuits`;
      sources.push({ title: 'EE 201 - Circuit Analysis Notes', page: 12 });
    } else if (lower.includes('physics') || lower.includes('topic')) {
      content = `## GCE Physics - Topic Analysis (2019-2023)\n\nBased on analysis of the last 5 years of GCE Physics papers:\n\n| Topic | Frequency | Avg Marks | Trend |\n|-------|-----------|-----------|-------|\n| Mechanics | 95% | 28 | ↑ Rising |\n| Waves & Optics | 88% | 22 | → Stable |\n| Electricity | 85% | 20 | ↑ Rising |\n| Thermal Physics | 72% | 15 | → Stable |\n| Nuclear Physics | 65% | 12 | ↓ Declining |\n| Modern Physics | 45% | 8 | ↑ Rising |\n\n### 🔮 Predicted High-Priority Topics for Next Exam:\n1. **Mechanics** — Newton's laws, projectile motion (95% frequency)\n2. **Electricity** — Circuits, electromagnetic induction (85%, rising)\n3. **Waves** — Interference, diffraction patterns (88%)\n\n### 📝 Recommended Practice:\n- Focus on Mechanics problems involving forces and motion\n- Practice circuit calculations with Kirchhoff's laws\n- Review wave equations and interference patterns\n\n⚠️ *Note: Predictions are based on historical analysis and are for revision guidance only.*`;
    } else {
      content = `Great question! Let me help you with that.\n\nBased on the available academic resources, here's what I can tell you:\n\nThis topic relates to your current studies. I'd recommend:\n\n1. **Review the relevant past papers** — Look for similar questions in previous examinations\n2. **Check the marking scheme** — Understand how marks are allocated\n3. **Practice similar problems** — Build confidence through repetition\n\nWould you like me to:\n- Find specific past paper questions on this topic?\n- Provide a step-by-step explanation?\n- Generate practice questions for you?\n- Show you the topic frequency analysis?\n\nJust let me know how I can help further! 📚`;
    }

    return {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content,
      timestamp: new Date(),
      sources: sources.length > 0 ? sources : undefined,
    };
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 dark:text-white">AI Study Buddy</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online • Powered by AI
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="New conversation">
              <RotateCcw className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Save conversation">
              <BookmarkPlus className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'} rounded-2xl px-5 py-4 shadow-sm`}>
                <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                  {msg.content.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold mt-2 mb-1">{line.replace('## ', '')}</h2>;
                    if (line.startsWith('### ')) return <h3 key={i} className="text-base font-semibold mt-2 mb-1">{line.replace('### ', '')}</h3>;
                    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-semibold">{line.replace(/\*\*/g, '')}</p>;
                    if (line.startsWith('- ') || line.startsWith('• ')) return <p key={i} className="ml-4">• {line.replace(/^[-•] /, '')}</p>;
                    if (line.match(/^\d+\./)) return <p key={i} className="ml-4">{line}</p>;
                    if (line.startsWith('|')) return <p key={i} className="font-mono text-xs">{line}</p>;
                    if (line.startsWith('```')) return <p key={i} className="font-mono text-xs bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded">{line.replace(/```\w*/, '')}</p>;
                    if (line.startsWith('💡') || line.startsWith('⚠️') || line.startsWith('📝') || line.startsWith('🔮')) return <p key={i} className="mt-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-sm">{line}</p>;
                    if (line.trim() === '') return <br key={i} />;
                    return <p key={i} className="text-sm leading-relaxed">{line}</p>;
                  })}
                </div>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Sources:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.sources.map((src, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-xs text-blue-700 dark:text-blue-300">
                          {src.title}{src.page ? ` (p.${src.page})` : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {msg.role === 'assistant' && (
                  <button className="mt-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </button>
                )}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="px-4 sm:px-6 pb-3">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
              <Lightbulb className="w-3 h-3" /> Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, i) => (
                <button key={i} onClick={() => handleSend(q)} className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about any paper, topic, or concept..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" title="Attach paper">
                  <FileText className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" title="Use notes">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
            <Sparkles className="w-3 h-3 inline" /> AI responses are generated for study guidance. Always verify with official marking schemes.
          </p>
        </div>
      </div>
    </div>
  );
}
