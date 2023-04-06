# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
|David Paul Mark |366913 |
|Mahdi Ihdeme |270605 |
|Sara Nour Dhina |284867 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (23rd April, 5pm)

**10% of the final grade**

[Milestone 1 report](https://github.com/com-480-data-visualization/project-2023-datavizteam/blob/master/milestone1.md)

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

> Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.
>
> Hint: some good pointers for finding quality publicly available datasets ([Google dataset search](https://datasetsearch.research.google.com/), [Kaggle](https://www.kaggle.com/datasets), [OpenSwissData](https://opendata.swiss/en/), [SNAP](https://snap.stanford.edu/data/) and [FiveThirtyEight](https://data.fivethirtyeight.com/)), you could use also the DataSets proposed by the ENAC (see the Announcements section on Zulip).

We have decided to examine the dataset which we got from following source: https://catalog.data.gov/dataset/air-traffic-passenger-statistics

It contains data about air traffic passenger statistics for all flights that depart from, arrive at or have transit at the San Francisco International Airport (SFO) from July 2005 until December 2022. As the dataset gets updated every 3 months, we are using the most current version, but in the future the dataset found at the given source might contain even more data.

Our dataset has 12 columns, being:
- Activity Period: consists of 6 digits, the first 4 digits being the year and the last 2 digits the month
- Operating Airline: the name of the operating airline
- Operating Airline IATA Code: the official IATA code of the operating airline
- Published Airline: the name of the published airline; in aviation the published airline can be different from the operating airline
- Published Airline IATA Code: the official IATA code of the published airline
- GEO Summary: describes if the described flight is a domestic or international flight; only these two values are possible
- GEO Region: describes the geographic region of departure/arrival (whichever is not the San Francisco International Airport); possible are 'Canada', 'US', 'Mexico', 'Europe', 'Asia', 'Australia / Oceania', 'Central America', 'Middle East'
- Activity Type Code: describes if the given flight acticity is a flight departing from San Francisco International Airport ('Enplaned'), arriving at it ('Deplaned') or having it as transit airport ('Thru / Transit')
- Price Category Code: describes if the flight is a low fare flight ('Low Fare') or not ('Other')
- Terminal: describes the terminal at the SFO airport from which the planes departs or at which it arrives
- Boarding Area: describes the boarding area at the given terminal from which the plane departs or at which it arrives
- Passenger Count: describes the total passenger count on the given flight in the given activity period

The quality of the data is very good as all 50730 tuples have information in all 12 columns. There is no general preprocessing needed, only preprocessing for specific tasks/ needs, for example as the tracking begins in July 2005, to compare the total passenger count for given years it is good to eliminate the data of 2005 and only use the data from 2006 to 2022 as these years have the data for the whole year.

### Problematic

> Frame the general topic of your visualization and the main axis that you want to develop.
> - What am I trying to show with my visualization?
> - Think of an overview for the project, your motivation, and the target audience.

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

### Related work


> - What others have already done with the data?
> - Why is your approach original?
> - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).
> - In case you are using a dataset that you have already explored in another context (ML or ADA course, semester project...), you are required to share the report of that work to outline the differences with the submission for this class.

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

