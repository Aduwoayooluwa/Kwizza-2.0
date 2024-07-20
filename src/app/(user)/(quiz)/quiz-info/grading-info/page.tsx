import { Button } from '@nextui-org/react';
import React from 'react';

const GradingCriteriaPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow rounded-lg p-8 space-y-8">
                <h1 className="text-xs font-medium">GRADING INFO</h1>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-medium">Set grading criteria</p>
                    <p className="text-xs text-gray-600">Define grading criteria now or when all test scores are available.</p>
                </div>
                <div>
                    <p className="text-sm font-medium">Maximum possible score (100%): 7p.</p>
                </div>
                <form action="/api/submit-grading-criteria" method="post" className="space-y-6">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium" htmlFor="pass-mark">Pass mark</label>
                        <input aria-label='pass-mark-enabled' type="checkbox" id="pass-mark-enabled" name="pass-mark-enabled" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <label className="text-sm font-medium" htmlFor="pass-mark">Pass mark value</label>
                        <input type="number" id="pass-mark" name="pass-mark" className="w-20 border rounded-lg p-2" defaultValue={70} />
                        <label className="text-sm font-medium" htmlFor="unit">Unit</label>
                        <select name="unit" id="unit" className="border rounded-lg p-2">
                            <option value="%">%</option>
                            <option value="points">Points</option>
                        </select>
                    </div>
                    {/* <div className="flex items-center gap-4">
            <label className="text-sm font-medium" htmlFor="define-grade-ranges">Define grade ranges based on points or percents</label>
            <input type="checkbox" id="define-grade-ranges" name="define-grade-ranges" />
          </div> */}
                    <Button type="submit" color='primary'>Save</Button>
                </form>
            </div>
        </div>
    );
};

export default GradingCriteriaPage;
