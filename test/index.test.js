import { fireEvent, getByRole, getByTestId, getByText, getByTitle } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const projectPage = fs.readFileSync(path.resolve(__dirname, '../pages/projects.html'), 'utf8');

let dom
let container

describe('Testing home page (index.html)', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('It renders the home page (index.html)', () => {
    expect(getByText(container, 'Software Development')).not.toBeNull()
    expect(getByText(container, 'Cyber Security')).not.toBeNull()
    expect(getByText(container, 'Data Science')).not.toBeNull()
  })

  it('When "MY PROJECTS" is clicked, it routes to projects page (projects.html)', () => {
    expect(getByText(container, 'My Projects').closest('a')).toHaveAttribute('href', './pages/projects.html')
  })

  it('Social redirects are working', () => {
    expect(getByText(container, 'ERNE0009@e.ntu.edu.sg').closest('a')).toHaveAttribute('href', 'mailto:ERNE0009@e.ntu.edu.sg')
  })

})