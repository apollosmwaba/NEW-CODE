import { useState } from 'react';
import { predictions, topicAnalysis } from '../data/mockData';
import { TrendingUp, BarChart3, AlertTriangle, Target, Calendar, Award, Info } from 'lucide-react';

export default function Predictions() {
  const [subject, setSubject] = useState('mathematics');
  const [examType, setExamType] = useState('gce');

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" /> Examination Predictions
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Topic Frequency & Predictions</h1>
          <p className="text-gray-600 dark:text-gray-300">Data-driven analysis of historical examination papers to identify patterns and guide revision.</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Important Disclaimer</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
              Predictions are based on statistical analysis of historical data and are provided for revision guidance only. They do not guarantee what will appear in any examination. Always prepare comprehensively across all topics.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Examination Type</label>
            <select value={examType} onChange={(e) => setExamType(e.target.value)} className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="gce">GCE</option>
              <option value="school">School Examination</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Analysis Period</label>
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>2019 - 2023 (5 years)</option>
              <option>2021 - 2023 (3 years)</option>
              <option>2015 - 2023 (9 years)</option>
            </select>
          </div>
        </div>

        {/* Analysis Summary */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Papers Analyzed</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">25</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 years × 5 papers/year</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Topics Identified</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">12</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Across all papers analyzed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Model Accuracy</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">78%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Based on 2023 validation</p>
          </div>
        </div>

        {/* Topic Frequency Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" /> Topic Frequency Analysis
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Historical frequency of topics appearing in examinations (2019-2023)</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Topic</th>
                  <th className="text-center px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Frequency</th>
                  <th className="text-center px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Avg Marks</th>
                  <th className="text-center px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Predicted Probability</th>
                  <th className="text-center px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Confidence</th>
                  <th className="text-center px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Last Seen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {predictions.map((pred, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-white">{pred.topic}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pred.frequency}%` }} />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{pred.frequency}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">{pred.marks}</td>
                    <td className="px-6 py-4 text-center">
                      {pred.probability ? (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${pred.probability >= 0.75 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : pred.probability >= 0.5 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {(pred.probability * 100).toFixed(0)}%
                        </span>
                      ) : (
                        <span className="text-xs text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${pred.confidence === 'high' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : pred.confidence === 'medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}`}>
                        {pred.confidence}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">{pred.lastSeen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Year-by-Year Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-8">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" /> Year-by-Year Marks Distribution
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Topic</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">2019</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">2020</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">2021</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">2022</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">2023</th>
                  <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-400">Average</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {topicAnalysis.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                    <td className="px-6 py-3 font-medium text-gray-900 dark:text-white text-sm">{item.topic}</td>
                    {Object.values(item.years).map((marks, j) => (
                      <td key={j} className="px-4 py-3 text-center">
                        <span className={`inline-block w-8 h-8 leading-8 rounded-lg text-xs font-medium ${marks >= 20 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : marks >= 15 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : marks >= 10 ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {marks}
                        </span>
                      </td>
                    ))}
                    <td className="px-4 py-3 text-center font-bold text-gray-900 dark:text-white">{item.avgMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Model Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">About This Analysis</h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <p><strong>Model Version:</strong> AcademicAI Prediction Engine v2.1</p>
                <p><strong>Method:</strong> Weighted frequency analysis with recency bias and trend detection</p>
                <p><strong>Training Data:</strong> 25 examination papers (2019-2023), 312 classified questions</p>
                <p><strong>Validation:</strong> Chronological testing — trained on 2019-2022, validated against 2023 papers</p>
                <p><strong>Last Updated:</strong> January 2024</p>
                <p className="text-gray-500 dark:text-gray-400 mt-3 italic">
                  Confidence levels indicate the reliability of predictions based on data volume and consistency. "High" means the topic has appeared consistently with stable marks allocation. "Low" means limited data or irregular patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
